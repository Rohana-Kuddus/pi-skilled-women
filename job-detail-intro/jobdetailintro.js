const getJob = async (id) => {
    const api = `https://65687b5f9927836bd974e7bb.mockapi.io/api/v1/jobs/${id}`;

    const raw = await fetch(api);
    const data = await raw.json();
    return data;
};

const getDetail = async (id) => {
    const api = `https://65695a6ade53105b0dd6ef91.mockapi.io/jobs/details/${id}`;
    
    const raw = await fetch(api);
    const data = await raw.json();
    return data;
};

const showData = async () => {
    // get data by id
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const job = await getJob(id);
    const data = await getDetail(id);

    // hero section and header
    // const page = document.getElementById('page-title');
    // const title = document.getElementById('job-title');
    // const hero = document.getElementById('hero-img');

    page.innerHTML = `${job.title} | Skilled Women`;
    title.innerHTML = job.title;
    hero.src = job.image;
    hero.alt = getTag(job.image);

    // intro section
    // const introHeader = document.getElementById('intro-heading');
    // const introContent = document.getElementById('intro-content');
    // const percent = document.getElementById('percentage');
    // const industryImg = document.getElementById('industry-img');
    // const industry = document.getElementById('industry');
    // const income = document.getElementById('income');

    introHeader.innerHTML = `Siapa itu ${job.title}?`;
    introContent.innerHTML = data.description;
    percent.innerHTML = data.percentage;
    industryImg.src = data.path;
    industryImg.alt = getTag(data.path);
    industry.innerHTML = `Industri ${job.tagId}`;
    income.innerHTML = data.income;

    // benefit section
    // const benefitHeader = document.getElementById('benefit-heading');
    // const benefitContainer = document.getElementById('benefit-container');

    benefitHeader.innerHTML = `Apa Keunggulan ${job.title}?`;
    data.benefits.map((value) => {
        const alt = getTag(value.path);
        benefitContainer.innerHTML += `
        <div class="benefit-item">
            <img class="icon" src="${value.path}" alt="${alt}">
            <p class="paragraph-dark">${value.description}</p>
        </div>
    `;
    });

    // video section
    // const videoHeader = document.getElementById('video-heading');
    // const video = document.getElementById('video');
    
    videoHeader.innerHTML = `Bagaimana Kehidupan ${job.title}?`;
    video.src = data.video;
};

const getTag = (param) => {
    const res = param.slice(6, param.length - 4);
    return res;
};

showData();