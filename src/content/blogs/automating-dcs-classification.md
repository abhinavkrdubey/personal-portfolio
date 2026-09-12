---
title: Automating a Complex Product-Classification Workflow
description: How problem framing, text features and model optimization turned a multi-day manual process into a repeatable ML workflow.
published: 2026-09-11
tags: [Machine Learning, NLP, Automation]
projects: [dcs-automation]
draft: false
order: 1
---

## The workflow

The DCS item-placement process involved substantial manual analysis. Completing one cycle could take several days, making the workflow difficult to scale consistently.

## Framing the problem

Rather than treating the task as simple text matching, I framed it as supervised product classification. This made it possible to evaluate the workflow with measurable criteria and improve it systematically.

## Building the solution

The pipeline combined TF-IDF and n-gram text features with Multinomial Naive Bayes. Optuna was used to tune the model and preprocessing choices, while automated validation made the results repeatable.

## Outcome

The automated workflow reduced the analysis cycle from multiple days to roughly half a day while improving consistency and scalability.
