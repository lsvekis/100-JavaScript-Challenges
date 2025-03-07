console.log("Task completed.");
callback();
}
doTask(() => console.log("Callback executed."));