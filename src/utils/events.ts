declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

type Payload = {
  plan_name: string;
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycby_h07g5S0qxxnZEA4IBmOdG9zht1ICSim-p83MCLCGneyEeqAdDSYBvpEMn9lWES9h/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({ date, ...payload, form_name: "form1", variant: "neiro_2" }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
