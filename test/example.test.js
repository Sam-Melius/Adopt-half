// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDogCard, } from '../render-utils.js';

const test = QUnit.test;

test('renderDog should take in a dog and return the correct DOM element. ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const dog = {
        id: 3,
        name: 'fluffy',
        breed: 'red heeler'
    };
    
    const expected = `<a href="./detail/?id=3"><div class="dog-card"><p>fluffy</p><img src="./assets/red heeler.jpeg"></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected,);
});
