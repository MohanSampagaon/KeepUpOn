import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

type DataItem = {
  month: string;
  high: number;
  medium: number;
  low: number;
};

type ClubbedBarChartProps = {
  data: DataItem[];
  width?: number;
  height?: number;
};

const ClubbedBarChart: React.FC<ClubbedBarChartProps> = ({ data, width = 800, height = 400 }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const margin = { top: 50, right: 30, bottom: 40, left: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const [selectedCategory, setSelectedCategory] = useState<string | null>("high");

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const x0 = d3.scaleBand()
      .domain(data.map(d => d.month))
      .range([0, innerWidth])
      .padding(0.2);

    const x1 = d3.scaleBand()
      .domain(["high", "medium", "low"])
      .range([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.high, d.medium, d.low))!])
      .nice()
      .range([innerHeight, 0]);

    const color = d3.scaleOrdinal<string>()
      .domain(["high", "medium", "low"])
      .range(["#FF6384", "#FFCE56", "#36A2EB"]);

    // Add axes
    svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top + innerHeight})`)
      .call(d3.axisBottom(x0));

    svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .call(d3.axisLeft(y));

    // Tooltips
    const tooltip = d3.select("body").append("div")
      .style("position", "absolute")
      .style("padding", "5px 10px")
      .style("background", "white")
      .style("border", "1px solid #ccc")
      .style("pointer-events", "none")
      .style("opacity", 0);

    // Animation and bars
    const bars = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .selectAll("g")
      .data(data)
      .join("g")
      .attr("transform", d => `translate(${x0(d.month)!},0)`);

    bars.selectAll("rect")
      .data(d => ["high", "medium", "low"].map(key => ({ key, value: d[key as keyof DataItem] })))
      .join("rect")
      .attr("x", d => x1(d.key)!)
      .attr("y", y(0))
      .attr("width", x1.bandwidth())
      .attr("height", 0)
      .attr("fill", d => color(d.key) as string)
      .transition()
      .duration(800)
      .attr("y", d => y(d.value))
      .attr("height", d => innerHeight - y(d.value));

    bars.selectAll("rect")
      .on("mouseover", function(event, d) {
        tooltip.style("opacity", 1)
          .text(`${d.key}: ${d.value}`)
          .style("left", `${event.pageX + 5}px`)
          .style("top", `${event.pageY - 30}px`);
        d3.select(this).attr("fill", d3.color(color(d.key) as string)!.darker(0.5) as string);
      })
      .on("mouseout", function(d, i) {
        tooltip.style("opacity", 0);
        d3.select(this).attr("fill", color(d.key) as string);
      });

    // Legend
    const legend = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top / 2})`);

    ["high", "medium", "low"].forEach((key, index) => {
      const legendItem = legend.append("g")
        .attr("transform", `translate(${index * 100}, 0)`)
        .style("cursor", "pointer")
        .on("click", () => {
          setSelectedCategory(prev => (prev === key ? null : key));
        });

      legendItem.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .attr("fill", color(key) as string);

      legendItem.append("text")
        .attr("x", 25)
        .attr("y", 14)
        .text(key)
        .style("font-size", "12px");
    });

    // Highlighting category on click
    bars.selectAll("rect")
      .transition()
      .attr("opacity", (d:any) => (selectedCategory && d.key !== selectedCategory) ? 0.3 : 1);

    // Cleanup on unmount
    return () => tooltip.remove();
  }, [data, selectedCategory]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default ClubbedBarChart;
