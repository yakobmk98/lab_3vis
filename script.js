d3.csv("cities.csv", d3.autoType).then((data) => {
    console.log("cities", data);
  
    data = data.filter((d) => d.eu === true);
  
    console.log("cities", data);
  
    d3.select(".city-count").text(data.length);
  
    const width = 700;
    const height = 550;
    const svg = d3
      .select(".population-plot")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d, i) => d.x)
      .attr("cy", (d, i) => d.y)
      .attr("r", (d) => (d.population < 1000000 ? 4 : 8))
      .attr("fill", "green");
  
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d, i) => d.x)
      .attr("y", (d, i) => d.y)
      .text((d) => (d.population >= 1000000 ? d.country + "" : ""))
      .attr("font-size", (d) => 11)
      .attr("text-anchor", (d) => "middle")
      .attr("dy", 3)
      .attr("font-weight", (d) => "bold");
  });
  
  d3.csv("buildings.csv", d3.autoType).then((data) => {
    console.log("buildings", data);
    data.sort((a, b) => b.height_ft - a.height_ft);
    console.log("buildings", data);
  
    const width = 500;
    const height = 500;
    const svg = d3
      .select(".building-bar")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 170)
      .attr("class", "rect")
      .attr("y", (d, i) => i * 50)
      .attr("width", (d, i) => d.height_px)
      .attr("height", 40)
      .attr("fill", "brown")
  
      .on("click", (event, d) => {
        document.querySelector(".image").src = "img/" + d.image;
        d3.select(".building-name").text(d.building + "");
        d3.select(".height").text(d.height_ft + "");
        d3.select(".city").text(d.city + "");
        d3.select(".country").text(d.country + "");
        d3.select(".floors").text(d.floors + "");
        d3.select(".completed").text(d.completed + "");
      });
  
    svg
      .selectAll("text.building")
      .data(data)
      .enter()
      .append("text")
      .attr("x", 165)
      .attr("y", (d, i) => i * 50)
      .text((d) => d.building)
      .attr("font-size", (d) => 11)
      .attr("text-anchor", (d) => "end")
      .attr("dy", 23);
  
    svg
      .selectAll("text.height")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d, i) => d.height_px + 175)
      .attr("y", (d, i) => i * 50)
      .text((d) => d.height_ft + " feet")
      .attr("font-size", (d) => 11)
      .attr("text-anchor", (d) => "start")
      .attr("dy", 23);
  });
  