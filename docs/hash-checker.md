---
layout: markdown
title: Hash Checker
description: Calculate and compare CRC-32, MD5, SHA-1, SHA-256, SHA-384 and SHA-512 file hashes with the ShareX hash checker.
---

## What is the ShareX hash checker?

The ShareX hash checker calculates a file checksum and compares it with an expected value or the hash of another file. Hashes help verify download integrity, confirm two files contain identical bytes and detect accidental file changes.

Open it from **Tools** -> **Hash checker**.

## Check a file against a published hash

1. Choose or drop the file to check.
2. Select the same algorithm used by the publisher.
3. Paste the expected hash into the target-hash field.
4. Select **Check**.

ShareX ignores letter casing when comparing the calculated and target values. A progress indicator is shown for large files, and **Stop** cancels an active calculation.

## Compare two files

Enable the two-file comparison option, select both files and choose **Check**. ShareX calculates both hashes with the selected algorithm and reports whether they match.

A matching cryptographic hash is strong evidence that the files contain the same bytes. It does not compare names, dates, permissions or other file-system metadata.

## Supported algorithms

- CRC-32
- MD5
- SHA-1
- SHA-256
- SHA-384
- SHA-512

Use the algorithm supplied with the download when checking integrity. For your own security-sensitive verification, prefer SHA-256, SHA-384 or SHA-512. CRC-32 is designed for accidental-error detection, and MD5 and SHA-1 are no longer collision-resistant enough for proving that untrusted content is authentic.

A correct hash only proves that the file matches the reference value you entered. Obtain published hashes from a trusted source, ideally over a secure connection separate from the downloaded file.
