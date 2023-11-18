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

        const $templateLink = document.querySelector('#link');
        this.generateLinks(data.links, $templateLink);
        $templateLink.remove();
        
        const $year = document.querySelector('#year');
        $year.innerText = new Date().getFullYear();
    }
    
    generateLinks(linksData, $templateLink) {
        for (let name of linksData) {
            const $newLink = $templateLink.cloneNode(true);
            const linkText = ' ' + name.text;
            $newLink.append(linkText);

            $newLink.setAttribute('href', name.url);

            const $newLinkIcon = $newLink.querySelector('i');
            $newLinkIcon.className = name.icon;
            
            $templateLink.before($newLink);
        }

        return true;
    }
}

let profile = new Profile();

getData('data.json')
    .then(data => {
        profile.render(data);
    }).catch(error => {
        console.error(error);
    });

async function getData(pathToJSON) {
    try {
        const getResponse = await fetch(pathToJSON);
        const responsedata = await getResponse.json();
        return responsedata;
    } catch (error) {
        console.error(error);
    }
}

function toggleDisplayPageContent() {
    const $elements = document.querySelectorAll('body *');

    $elements.forEach($element => {
        if ($element.style.display === '') {
            $element.style.display = 'none';
        } else {
            $element.removeAttribute('style');
        }
    });
}

function createStub() {
    const $stub = document.createElement('div');
    $stub.textContent = 'Профиль загружается';

    renderStub($stub);

    return $stub
}

function renderStub($stub) {
    const $body = document.querySelector('body');
    $body.append($stub);
}

function toggleDisplayStub($stub) {
    if ($stub.style.display === '') {
        $stub.style.display = 'none';
    } else {
        $stub.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const $stub = createStub();
    toggleDisplayPageContent();
    toggleDisplayStub($stub);

    setTimeout(() => {
        toggleDisplayPageContent();
        toggleDisplayStub($stub);
}, 2500);
});