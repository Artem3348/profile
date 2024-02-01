import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import userData from '../data/data.json'

type User = {
    [key: string]: string,
}

type Link = {
    [key: string]: string,
}

interface Data {
    user: User,
    links: Link[], 
}

class Profile {
    render(data: Data) {
        const $avatar: HTMLElement | null = document.querySelector('#avatar');
        if ($avatar === null) {
            throw new Error('error');
        }

        $avatar.setAttribute('src', data.user.avatar);

        const $name: HTMLElement | null = document.querySelector('#name');
        if ($name === null) {
            throw new Error('error');
        }

        $name.innerText = data.user.name;

        const $location: HTMLElement | null = document.querySelector('#location');
        if ($location === null) {
            throw new Error('error');
        }

        $location.innerHTML += ' ' + data.user.location;

        const $occupation: HTMLElement | null = document.querySelector('#occupation');
        if ($occupation === null) {
            throw new Error('error');
        }
        
        $occupation.innerText = data.user.occupation;

        const $templateBtnLink: HTMLElement | null = document.querySelector('#link');
        if ($templateBtnLink === null) {
            throw new Error('error');
        }

        this.generateLinks(data.links, $templateBtnLink);
        $templateBtnLink.remove();
        
        const $year: HTMLElement | null = document.querySelector('#year');
        if ($year === null) {
            throw new Error('error');
        }
        $year.innerText = String(new Date().getFullYear());
    }
    
    generateLinks(linksData: Link[], $templateBtnLink: HTMLElement | null) {
        if ($templateBtnLink === null) {
            throw new Error('error');
        }
        for (let name of linksData) {
            const $newBtnLink: Node = $templateBtnLink.cloneNode(true);
            const linkText: string = ' ' + name.text;

            const $newLink: HTMLElement | null = ($newBtnLink as HTMLElement).querySelector('a');
            if ($newLink === null) {
                throw new Error('error');
            }
            $newLink.append(linkText);

            $newLink.setAttribute('href', name.url);

            const $newBtnLinkIcon: HTMLElement | null = ($newBtnLink as HTMLElement).querySelector('i');
            if ($newBtnLinkIcon === null) {
                throw new Error('error');
            }
            $newBtnLinkIcon.className += ' ' + name.icon;
            
            $templateBtnLink.before($newBtnLink);
        }

        return true;
    }
}

let profile: Profile = new Profile();

profile.render(userData);

function toggleDisplayPageContent(): void {
    const $elements: NodeListOf<HTMLElement> = document.querySelectorAll('body *');

    $elements.forEach(($element: HTMLElement) => {
        if ($element.style.display === '' && $element.className !== 'loader') {
            $element.style.display = 'none';
        } else {
            $element.removeAttribute('style');
        }
    });
}

function createStub(): HTMLElement {
    const $stubContainer: HTMLElement = document.createElement('div');
    $stubContainer.className += 
        'container d-flex flex-column justify-content-center align-items-center';

    const $stub:HTMLElement = document.createElement('div');
    $stub.textContent = 'Профиль загружается';

    $stubContainer.append($stub);

    const $loader: HTMLElement = document.createElement('span');
    $loader.className = 'loader';

    renderStub($stubContainer, $loader);

    return $stub
}

function renderStub($stub: HTMLElement, $loader: HTMLElement): void {
    const $container: HTMLElement | null = document.querySelector('.container');
    if ($container === null) {
        throw new Error('error');
    }
    $container.append($stub);
    $stub.append($loader);
}

function addDisplayStub($stub: HTMLElement): void {
    $stub.style.display = 'block';
}

function removeStub($stub: HTMLElement): void {
    if ($stub.parentElement === null) {
        throw new Error('error');
    }
    $stub.parentElement.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    const $stub: HTMLElement = createStub();
    toggleDisplayPageContent();
    addDisplayStub($stub);

    setTimeout(() => {
        toggleDisplayPageContent();
        removeStub($stub);
}, 2500);
});