// API constants
// export const API_KEY = 'dbe99561e3msh911b9198134f4e5p19b91djsn062e35724b91';
export const API_KEY = 'bd980029d3msh72e448dd224bb93p1cb1e0jsn0a52946bec3f';
export const API_HOST = 'ai-textraction.p.rapidapi.com';
export const API_URL = 'https://ai-textraction.p.rapidapi.com/textraction';
export const FORM_CLASS_NAME = 'form-container';

export const DEBUG = true;

// Default text and entities
export const DEFAULT_TEXT = `Greetings! I'm Prashant, a seasoned software engineer with over a decade of experience in crafting exceptional mobile applications. At 35 years old, I bring a wealth of expertise and enthusiasm to every project I undertake.

In 2011, I graduated with distinction from Tech University, earning a Bachelor's degree in Computer Science with a commendable GPA of 75%. Since then, I've dedicated myself to mastering the intricacies of mobile app development, with a focus on React Native and Android platforms.

With 5 years of immersive experience in React Native and another 5 years dedicated to Android development, I've cultivated a deep understanding of both ecosystems. My journey has been fueled by a relentless passion for innovation and a drive to deliver impactful solutions that resonate with users.

Beyond my professional pursuits, I'm an avid enthusiast of outdoor adventures, particularly hiking and camping. I find solace in nature's embrace, where I recharge my creativity and find inspiration for my next coding adventure.

As a software engineer, I thrive in collaborative environments where teamwork and innovation thrive. I'm excited about the opportunity to continue pushing the boundaries of mobile app development, leveraging my diverse skill set and passion for technology to create meaningful solutions that leave a lasting impact.`;


export const getEntityArrayFromForm = (form) => {
    const entityArray = [];

    // Helper function to determine the input type
    const getInputType = (input) => {
        if (input.type === 'number') {
            return 'integer';
        }
        return 'string';
    };

    // Get all form groups
    const formGroups = form.querySelectorAll('.form-group');

    formGroups.forEach((group) => {
        const label = group.querySelector('label').innerText;
        const input = group.querySelector('input, textarea');

        if (input) {
            const varName = input.name;
            const type = getInputType(input);

            entityArray.push({
                description: label,
                type: type,
                var_name: varName
            });
        }
    });

    return entityArray;
};

