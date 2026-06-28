---
layout: markdown
title: Cloudflare R2 guide
---

## How to configure Cloudflare R2 and use it in ShareX

Create an account on [Cloudflare](https://cloudflare.com).

Ensure that your domain is [added](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) to Cloudflare and verified with nameserver records at your domain registrar. Your domain must be hosted through Cloudflare; otherwise, you cannot use R2 and the Cloudflare CDN to host your images.

While R2 is not free, it does have a generous free tier. See the [Cloudflare R2 pricing](https://developers.cloudflare.com/r2/platform/pricing/) page for details.

### Create a bucket

1. Open [R2](https://dash.cloudflare.com/?to=/:account/r2).
2. Select `Create bucket`.
3. Enter a bucket name and click `Create Bucket`.
4. Select `Settings`.
5. Scroll to `Domain Access` and select `Connect Domain`.
6. Type your domain and select `Continue`.
7. Select `Connect domain`.

This connects your domain to the R2 bucket and makes the objects in that bucket accessible through the selected domain.

### Create an API token

1. Open [R2](https://dash.cloudflare.com/?to=/:account/r2).
2. Select `Manage R2 API Tokens` in the upper-right corner of the dashboard.
3. Select `Create API token`.
4. Select the pencil icon or `R2 Token` text to edit your API token name.
5. Under `Permissions`, select `Read` or `Edit` for your token.
6. Select `Create API Token`.
7. Save a copy of your `Access Key ID` and `Secret Access Key` for the next step.

### Configure uploads in ShareX

1. In `Destinations`, select `Destination settings`.
2. Scroll down to `Amazon S3` and select it.
3. Enter the `Access Key ID` and `Secret Access Key` in the first two boxes.
4. In `Endpoint:`, enter `<ACCOUNT_ID>.r2.cloudflarestorage.com`. You can find your account ID on the right-hand side of your [Dashboard](https://dash.cloudflare.com/?to=/:account/r2).
5. Set `Region:` to `auto`.
6. Enter the bucket name you chose on Cloudflare in `Bucket name:`.
7. Set `Upload path:` to your preferred path.
8. Set `Use custom domain:` to the domain that you selected when creating the bucket.
9. Uncheck `Set public-read ACL on file`.
10. Ignore the rest of the settings.
11. In `Destinations`, select `Image uploader:` and change it to `File uploader -> Amazon S3`.
12. Take a screenshot and ensure that it uploads correctly.

Now you are ready to use [Cloudflare R2](https://www.cloudflare.com/products/r2) in ShareX!
