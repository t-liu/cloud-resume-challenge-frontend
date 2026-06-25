document.addEventListener('DOMContentLoaded', () => {
    const downloadPdfBtn = document.getElementById('download-pdf');
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', (e) => {
            e.preventDefault();

            // Target the main document container
            const element = document.getElementById('doc');

            // Configure html2pdf options
            const opt = {
                margin: [0.5, 0.5, 0.5, 0.5], // margin in inches
                filename: 'Thomas_Liu_Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // Generate and download the PDF
            html2pdf().set(opt).from(element).save();
        });
    }
});
