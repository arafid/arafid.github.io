# The Lies of Aggregate Indicators

**Afnan Rafid · Independent quantitative research · IB Mathematics: Applications & Interpretation HL**

[Read the portfolio case study](https://arafid.github.io/projects/aggregate-indicators/)

## Research question
What can a household income distribution reveal that an aggregate indicator such as GDP leaves out?

This historical IB investigation used U.S. household income distributions for 1967, 1990, and 2019 to explore skewness, concentration, regression, and the interpretation of economic indicators. The original 16-page paper is the source for this portfolio summary. This repository folder is a retrospective presentation, not the original spreadsheet or a reproduction of all fitted models.

## Methods in the original paper
- Histogram-based descriptions of grouped household income data.
- Polynomial regression and examination of residual error and R².
- Exponential fitting for the upper-income tail.
- A quadratic / exponential piecewise approximation around a $60,000 cutoff in the 1967 analysis.
- Discussion of normalization, arbitrary cutoffs, interpretability, and missing individual observations.
- A negative-binomial shape discussed as a possible comparison; no completed simulation or validated negative-binomial model.

The central modeling lesson is that a high overall fit can conceal poor fit in the income ranges that matter to the question. Simpler local models may be easier to interpret, but they still need validation.

## Included materials
- `selected-income-brackets.csv`: seven income bands for three selected years, transcribed from Appendix A, pp. 15–16. Values are percentages, not household-level observations. Bands at $150,000 and above are absent from the appendix excerpt and are not reconstructed.
- `../../assets/research/income-brackets.svg`: accessible grouped bar chart of that transcription. Bars show percentages per named bracket; unequal bracket widths mean these are not probability-density histogram heights.
- `method-and-limitations.md`: source boundaries and retrospective qualifications.

## Source
Afnan Rafid, *The Lies of Aggregate Indicators*, original IB Mathematics AI HL investigation, 16 pages. Appendix A attributes its household income table to the U.S. Census Bureau. Original analysis used GeoGebra and referenced an Excel appendix. Those original working files are not included here; no replacement coefficients or fit statistics have been invented.

The source paper remains unchanged. This folder documents the work without redistributing the original report or its third-party illustrations.
