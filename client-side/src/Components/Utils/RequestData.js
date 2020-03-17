const downloadJSON = (content, fileName, contentType) => {
  const data = JSON.stringify(content.features);
  var a = document.createElement("a");
  var file = new Blob([data], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
};
const downloadData = async () => {
  try {
    const response = await fetch("http://localhost:3000/download");
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse, "response from server");
      downloadJSON(jsonResponse, "json.txt", "text/plain");
      // return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};
document.addEventListener("DOMContentLoaded", function(event) {
  document
    .querySelector("#downloadData")
    .addEventListener("click", downloadData);
  // console.log(data);
});

