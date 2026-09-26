---
layout: markdown
title: Network Monitor
description: Monitor internet connectivity, latency, availability and disconnect events with ShareX using recurring ICMP checks and a persistent event log.
---

## What is the ShareX network monitor?

The ShareX network monitor repeatedly checks a reliable internet endpoint and charts the result. It reports current and average latency, availability and connection state changes, making it useful for diagnosing intermittent internet access.

Open it from **Tools** -> **Network monitor**.

## Start monitoring

1. Choose a target. **Automatic (recommended)** checks Cloudflare, Google DNS and Quad9 and uses the fastest successful response. Individual targets are also available.
2. Choose a check interval: 1, 2, 5, 10 or 30 seconds.
3. Select **Start monitoring**.
4. Choose a chart range covering the last 5 minutes, 15 minutes, hour, 6 hours or the full session.

The summary shows current latency, average latency, availability percentage and disconnect count for the selected time range. Samples are kept for up to 24 hours during the running session.

## Connection event log

The event list records transitions between connected and disconnected states rather than every successful check. To reduce brief false alarms, ShareX confirms a new failure after a one-second delay before recording a disconnection.

Connection events are also written to `NetworkMonitor.log` in the ShareX logs folder when a log path is available. You can copy all visible events, open the log file or clear the log from the tool.

## Understanding results

Checks use ICMP echo requests, commonly called ping. A failed check can mean the internet connection is down, but it can also mean a firewall, VPN, router or provider is blocking ICMP. Confirm repeated failures with a web browser or another network test before concluding that the connection itself is unavailable.

The monitor tests reachability to public DNS endpoints, not Wi-Fi signal strength, local-network throughput or the status of a specific website. A successful result does not guarantee that every online service is reachable.
