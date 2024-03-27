$(document).ready(function () {
    $('#export-btn').click(function () {
        let table = document.getElementById('data-table');
        let rows = table.getElementsByTagName('tr');
        let data = [];
        for (let i = 0; i < rows.length; i++) {
            let row = [], cols = rows[i].querySelectorAll('td, th');
            for (let j = 0; j < cols.length; j++) {
                row.push(cols[j].innerText);
            }
            data.push(row.join('\t'));
        }
        let excel = data.join('\n');
        let blob = new Blob([excel], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' });
        saveAs(blob, 'data.xlsx');
    });

    $('#copy-btn').click(function () {
        let selection = window.getSelection();
        selection.removeAllRanges();
        let range = document.createRange();
        range.selectNodeContents(document.getElementById('data-table'));
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        alert('Copied to clipboard');
    });
});
