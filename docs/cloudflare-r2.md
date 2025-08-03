---
layout: markdown
title: Cloudflare R2 guide
---

## How to Configure Cloudflare R2 and use it in ShareX

Create an account on [Cloudflare](https://cloudflare.com).

Ensure your domain is [added](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) to Cloudflare and verified using NS (Name Server) records on your domain registrar. Your domain **must** be hosted through Cloudflare; otherwise, this will not work, and you won't be able to use R2 or the Cloudflare CDN to host your images.

While R2 is not entirely free, it offers a generous free tier. You can view the full pricing details [here](https://developers.cloudflare.com/r2/platform/pricing/).

### Create a Bucket

1. Open [R2](https://dash.cloudflare.com/?to=/:account/r2).
2. Click `Create bucket`.
3. Enter your desired bucket name and click `Create Bucket`.
4. Go to the `Settings` tab.
5. Scroll to the `Domain Access` section and click `Connect Domain`.
6. Enter your domain name and click `Continue`.
7. Click `Connect domain`.

This will connect your domain to the R2 bucket, allowing any objects stored in it to be accessed through the specified domain.

### Create an API Token

1. Open [R2](https://dash.cloudflare.com/?to=/:account/r2).
2. Click `Manage R2 API Tokens` in the top-right corner of the dashboard.
3. Click `Create API token`.
4. Click the pencil icon or `R2 Token` text to rename your API token.
5. Under `Permissions`, select `Read` or `Edit`, depending on your needs.
6. Click `Create API Token`.
7. Save your `Access Key ID` and `Secret Access Key`. You will need them in the next step.

### Configure Uploading with ShareX

1. In ShareX, go to `Destinations -> Destination Settings`.
2. Scroll down and select `Amazon S3`.
3. Enter your `Access Key ID` and `Secret Access Key` in the appropriate fields.
4. In the `Endpoint:` field, enter `<ACCOUNT_ID>.r2.cloudflarestorage.com`. (You can find your account ID on the right-hand side of your [dashboard](https://dash.cloudflare.com/?to=/:account/r2).)
5. Set the `Region:` field to `auto`.
6. Enter your bucket name in the `Bucket name:` field.
7. Set the `Upload path:` to your preferred structure (e.g., `%y/%mo`).
8. In `Use custom domain:`, enter the domain you configured earlier (e.g., `https://cdn.example.com`).
9. Uncheck `Set public-read ACL on file`.
10. Leave the other settings as-is.
11. Go to `Destinations -> Image uploader:` and set it to `File Uploader -> Amazon S3`.
12. Take a screenshot and verify that the upload works correctly.

Now you're ready to use [Cloudflare R2](https://www.cloudflare.com/products/r2) with ShareX!
