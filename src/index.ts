// Asynchronous TypeScript:
const createPromise = () => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "something";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to load data");
    }
  });
};

// Calling promise function with error handling:
const showData = async () => {
  try {
    const data = await createPromise();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

showData();
