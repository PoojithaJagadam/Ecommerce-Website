import("tsx/esm")
  .then(() => import("./server.ts"))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });