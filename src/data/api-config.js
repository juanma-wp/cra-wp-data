import apiFetch from "@wordpress/api-fetch";

// Configure default middleware for all apiFetch requests
apiFetch.use(apiFetch.createPreloadingMiddleware({}));
apiFetch.use((options, next) => {
  // Ensure headers object exists
  options.headers = {
    ...options.headers,
    "Content-Type": "application/json",
  };

  // Set credentials to omit by default
  options.credentials = "omit";

  return next(options);
});
