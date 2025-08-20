---
layout: markdown
title: Google Cloud Storage guide
---

## How to Configure Google Cloud Storage and use it in ShareX

### Create a Project

* Open the [Google Cloud Console](https://console.cloud.google.com).
* Click `Select a project`, then click `New project`.
* Name your project (e.g., `ShareX`).
* Click `Create`.

### Set Up a Billing Profile

[Google Cloud Storage Pricing](https://cloud.google.com/storage/pricing)

Google Cloud Storage isn't free—it's billed based on usage rather than a flat monthly fee. Storage costs are very low; most users will pay nothing or just a few cents per month.

* Open the [Billing Console](https://console.cloud.google.com/billing) and set up a billing profile.

### Create a Bucket

* Open [Cloud Storage](https://console.cloud.google.com/storage).
* Click `Create bucket`.
* If you plan to use a custom domain, you must first verify the domain using [this guide](https://cloud.google.com/storage/docs/domain-name-verification). Then, name your bucket after the domain you're going to use. For example, for `https://i.example.com/image.png`, the bucket should be named `i.example.com`.
* Set the storage class to `Regional` if you plan to use a CDN like [Cloudflare](https://www.cloudflare.com), or `Multi-regional` if not.
* Set the access control to `Fine-grained`.
* Click `Create`.

### [Optional] Configure DNS for a Custom Domain

If you're going to use your own domain, you'll need to configure DNS.

For example, if you're using [Cloudflare](https://www.cloudflare.com) and your bucket name is `i.example.com`, use the following DNS settings:

* **Type:** `CNAME`  
* **Name:** `i`  
* **Value:** `c.storage.googleapis.com`

### Configure ShareX for Google Cloud Storage

* Open `Destinations -> Destination Settings`.
* Select the `Google Cloud Storage` tab.
* Complete the authorization process.
* Enter the bucket name exactly as you created it.
* For the upload path, it’s recommended to use `%y/%mo`, which creates folder structures like `2017/12`.
* If you're using a custom domain, enter it in the appropriate field. Google Cloud Storage doesn’t support custom domains over HTTPS natively. So unless you're using a TLS proxy like [Cloudflare](https://www.cloudflare.com), you must use `http://` instead of `https://`. For example: `http://i.example.com`.
* If your bucket uses **uniform permissions**, make sure to **uncheck** `Set public-read ACL on file`, as ACLs are not supported in buckets with uniform permissions.
* You can now close the Destination Settings window.
* In the main window, set Google Cloud Storage as the destination for your image, text, and file uploaders.

Now you're ready to use [Google Cloud Storage](https://cloud.google.com/storage) in ShareX!
