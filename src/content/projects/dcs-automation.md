---
title: DCS Automation
description: Automating a complex manual item-classification workflow using machine learning and optimization.
category: Machine Learning · Automation
impact: 7 days → 1 day
tags: [Python, TF-IDF, Optuna, ML]
order: 1
featured: true
metrics:
  - value: 7d → 1d
    label: Workflow duration
  - value: ~3%
    label: Profit uplift
  - value: ML
    label: Production pipeline
---

## The Problem

The existing DCS item-slotting process required substantial manual analysis and could take approximately seven days to complete.

## Problem Framing

Instead of treating the workflow as simple text matching, the problem was framed as supervised product classification with optimization around feature representation and model parameters.

## Approach

- TF-IDF feature engineering
- N-gram text representation
- Multinomial Naive Bayes
- Optuna hyperparameter optimization
- Automated preprocessing and validation

## Impact

The automated workflow reduced the analysis cycle from approximately seven days to roughly one day while improving consistency and scalability.
