// import style from './styles.css';

class Profile {
    render(data) {
        const $avatar = document.querySelector('#avatar');
        $avatar.setAttribute('src', data.user.avatar);

        const $name = document.querySelector('#name');
        $name.innerText = data.user.name;

        const $location = document.querySelector('#location');
        $location.innerHTML += ' ' + data.user.location;

        const $occupation = document.querySelector('#occupation');
        $occupation.innerText = data.user.occupation;

        const $templateBtnLink = document.querySelector('#link');
        this.generateLinks(data.links, $templateBtnLink);
        $templateBtnLink.remove();
        
        const $year = document.querySelector('#year');
        $year.innerText = new Date().getFullYear();
    }
    
    generateLinks(linksData, $templateBtnLink) {
        for (let name of linksData) {
            const $newBtnLink = $templateBtnLink.cloneNode(true);
            const linkText = ' ' + name.text;

            const $newLink = $newBtnLink.querySelector('a');

            $newLink.append(linkText);

            $newLink.setAttribute('href', name.url);

            const $newBtnLinkIcon = $newBtnLink.querySelector('i');
            $newBtnLinkIcon.className += ' ' + name.icon;
            
            $templateBtnLink.before($newBtnLink);
        }

        return true;
    }
}

let profile = new Profile();

getData('../data/data.json')
    .then(data => {
        profile.render(data);
    }).catch(error => {
        console.error(error);
    });

async function getData(pathToJSON) {
    try {
        const getResponse = await fetch(pathToJSON);
        const responseData = await getResponse.json();
        return responseData;
    } catch (error) {
        console.error(error);
    }
}

function toggleDisplayPageContent() {
    const $elements = document.querySelectorAll('body *');

    $elements.forEach($element => {
        if ($element.style.display === '' && $element.className !== 'loader') {
            $element.style.display = 'none';
        } else {
            $element.removeAttribute('style');
        }
    });
}

function createStub() {
    const $stubContainer = document.createElement('div');
    $stubContainer.className += 'container d-flex flex-column justify-content-center align-items-center';

    const $stub = document.createElement('div');
    $stub.textContent = 'Профиль загружается';

    $stubContainer.append($stub);

    const $loader = document.createElement('span');
    $loader.className = 'loader';

    renderStub($stubContainer, $loader);

    return $stub
}

function renderStub($stub, $loader) {
    const $container = document.querySelector('.container');
    $container.append($stub);
    $stub.append($loader);
}

function toggleDisplayStub($stub) {
    if ($stub.style.display === '') {
        $stub.style.display = 'none';
    } else {
        $stub.style.display = 'block';
    }
}

function addDisplayStub($stub) {
    $stub.style.display = 'block';
}

function removeStub($stub) {
    $stub.parentElement.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    const $stub = createStub();
    toggleDisplayPageContent();
    addDisplayStub($stub);

    setTimeout(() => {
        toggleDisplayPageContent();
        removeStub($stub);
}, 0);
});