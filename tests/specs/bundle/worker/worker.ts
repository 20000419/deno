// deno-lint-ignore-file no-console
console.log("Worker: bundling module");
try {
  await Deno.bundle({
    entrypoints: ["./main.ts"],
    write: false,
    outputDir: "/",
  });
  console.log("Worker: bundle unexpectedly succeeded");
} catch (error) {
  console.log("Worker: bundle error:", error.message);
}

postMessage("done");
