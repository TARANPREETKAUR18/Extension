// content.js

var contentArray1 = [], contentArray2 = [];

// Assuming comments and usernames have a one-to-one mapping
var comments = document.querySelectorAll('#content-text');
var usernames = document.querySelectorAll('#author-text');

for (let i = 0; i < comments.length; i++) {
    contentArray1.push(comments[i].innerText.replace(/(\r\n|\n|\r|'@|\t')/gm, ' ')); // Replace line breaks with spaces
    contentArray2.push(usernames[i].innerText.slice(1));

}

// Create a CSV-formatted string with two columns (username, comment)
var csvContent = 'Username,Comment\n'; // Header row

for (let i = 0; i < contentArray1.length; i++) {
    csvContent += `"${contentArray2[i]}","${contentArray1[i]}"\n`;
}

// Example: Download a CSV file with two columns (username, comment)
function downloadCSV(content, filename) {
    const blob = new Blob([content], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename || 'download.csv';
    link.click();
}

// Usage: Provide the CSV-formatted content and filename
downloadCSV(csvContent, 'data.csv');
