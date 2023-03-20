let texts = [
  {
    title: "How many team members can i invite?",
    text: `You can invite up to 2 additional users on the Free plan. There is
no limit on team members for the Premium plan.`,
  },
  {
    title: "What is the maximum file upload size?",
    text: `No more than 2GB. All files in your account must fit your allotted
    storage space.`,
  },
  {
    title: "How do I reset my password?",
    text: `Click “Forgot password” from the login page or “Change password”
    from your profile page. A reset link will be emailed to you.`,
  },
  {
    title: "Can I cancel my subscription?",
    text: `Yes! Send us a message and we’ll process your request no questions
    asked.`,
  },
  {
    title: "Do you provide additional support?",
    text: `Chat and email support is available 24/7. Phone lines are open
    during normal business hours.`,
  },
];

const textsHtml = (obj) => {
  let html = `
    <div class="faq-section">
            <p class="faq-title flex-justify-between">${obj.title} <span class="arrow"><img src="./images/icon-arrow-down.svg" /></span></p>
            <p class="faq-text">
              ${obj.text}
            </p>
          </div>
    `;

  return html;
};

let faqInformationEl = document.querySelector(".faq-information-accordion");
const populateTextHtml = () => {
  let html = "";
  texts.map((text) => {
    html += textsHtml(text);
  });
  faqInformationEl.innerHTML = html;
};

populateTextHtml();

const accordion = document.getElementsByClassName("faq-section");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const accordionEl = document.querySelectorAll(".faq-section");

    accordionEl.forEach((element) => {
      console.log(element);
      if (element !== this) {
        element.classList.remove("active");
      }
    });
    this.classList.toggle("active");
  });
}
