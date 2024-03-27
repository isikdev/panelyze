$(document).ready(function () {
    $('#export-btn').click(function () {
        let table = document.getElementById('data-table');
        let wb = XLSX.utils.table_to_book(table, { sheet: 'SheetJS' });
        XLSX.writeFile(wb, 'data.xlsx');
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
