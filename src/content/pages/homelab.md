---
eyebrow: Self-Hosted Infrastructure
headline: My private AI & ML platform.
intro: A self-hosted environment built to learn how models, APIs, monitoring, storage and infrastructure work together beyond the notebook.
status: Homelab operational
architectureTitle: From hardware to application.
architecture:
  - { name: Clients, detail: Mac · Phone · Browser }
  - { name: Caddy, detail: Reverse Proxy }
  - { name: Docker, detail: Application Platform }
  - { name: Ubuntu, detail: Host OS }
  - { name: Predator, detail: Physical Server }
featuredServices: [Jupyter, MLflow, Ollama, Immich, Nextcloud, Grafana]
servicesTitle: What runs on it.
hardwareTitle: Small machine. Serious playground.
hardwareText: The constraint is part of the point. Limited hardware forces deliberate decisions around services, resource usage and architecture.
services:
  - { name: JupyterLab, category: Development, description: Centralized Python and data-science experimentation environment., status: Running }
  - { name: MLflow, category: MLOps, description: Experiment tracking, metrics, artifacts and model lifecycle management., status: Running }
  - { name: Ollama, category: AI, description: Local language-model inference and experimentation., status: Running }
  - { name: Immich, category: Storage, description: Self-hosted phone photo and video backup platform., status: Running }
  - { name: Nextcloud, category: Cloud, description: Personal file sync, sharing and private cloud storage., status: Running }
  - { name: Grafana, category: Monitoring, description: System, Docker and GPU observability dashboards., status: Running }
  - { name: Prometheus, category: Monitoring, description: Time-series metrics collection and monitoring backend., status: Running }
  - { name: Caddy, category: Hosting, description: Reverse proxy and routing layer for hosted applications., status: Running }
specs:
  - { name: OS, value: Ubuntu Server }
  - { name: Compute, value: Intel Core i5 · 8 logical CPUs }
  - { name: Memory, value: ~15 GB RAM }
  - { name: GPU, value: NVIDIA GTX 1050 Ti · 4 GB }
  - { name: System Storage, value: 128 GB SSD }
  - { name: Data Storage, value: 1 TB HDD }
  - { name: Containers, value: Docker + Compose }
  - { name: Observability, value: Prometheus + Grafana }
principles:
  - { title: Reproducible, text: Services are containerized and configuration is treated as infrastructure. }
  - { title: Observable, text: CPU, memory, disks, Docker containers and GPU metrics are monitored. }
  - { title: Useful, text: The platform runs actual workloads instead of existing only as a demo environment. }
  - { title: Expandable, text: Designed to grow into hosting, AI workloads and home automation over time. }
---
