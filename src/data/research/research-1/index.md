---
title: 'Flash: Concept Drift Adaptation in Federated Learning'
tags: ['Federated Learning', 'Concept Drift', 'Drift Adaptation', 'Adaptive Optimization']
authors: ['Kunjal Panchal', 'Sunav Choudhary', 'Koyel Mukherjee', 'Subrata Mitra', 'Somdeb Sarkhel', 'Saayan Mitra', 'Hui Guan']
date: "2022-07-16T22:12:03.284Z"
period: 'July 2023'
venue: 'Published @ ICML, 2023'
url: "http://proceedings.mlr.press/v202/panchal23a/panchal23a.pdf"
description: "In Federated Learning (FL), adaptive optimization is an effective approach to addressing the statistical heterogeneity issue but cannot adapt quickly to concept drifts. In this work, we propose a novel adaptive optimizer called Flash that simultaneously addresses both statistical heterogeneity and the concept drift issues. 
The fundamental insight is that a concept drift can be detected based on the magnitude of parameter updates that are required to fit the global model to each participating client's local data distribution. Flash uses a two-pronged approach that synergizes client-side early-stopping  training to facilitate detection of concept drifts and the server-side drift-aware adaptive optimization to effectively adjust effective learning rate. We theoretically prove that Flash matches the convergence rate of state-of-the-art adaptive optimizers and further empirically evaluate the efficacy of Flash on a variety of FL benchmarks using different concept drift settings. 
"
---   


