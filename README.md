# LUAD Gene Expression Analysis

This project analyzes gene expression differences between lung adenocarcinoma (LUAD) tumor samples and normal lung tissue using TCGA RNA-seq data.

## Dataset
- Source: TCGA-LUAD (UCSC Xena)
- 535 tumor samples
- 59 normal samples
- ~60,600 genes analyzed

## Methods
The analysis was done in Python. I compared tumor and normal gene expression using:
- Welch's t-test
- Log2 fold change
- Benjamini-Hochberg FDR correction

## Files
- `index.html` - Project website
- `TCGA_LUAD_Gene_Expression_Analysis.ipynb` - Python analysis
- `images/` - Figures used in the website
