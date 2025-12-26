# Flash card app

## Functionality Spec

There are 2 kinds of views we can toggle between: All cards and Study mode.

Study Mode:
- You will be shown questions based on the category you have selected
- If the user knows the question, they can click on the "I know this" button and proceed to the next question
- Questions that the user knows are considered as mastered
- A checkbox to hide mastered questions
- A reset progress button that will turns all questions to not mastered
- A previous and next button to switch question
- A shuffle button to randomize the order of the questions
- The answer can be revealed by clicking "click to reveal answer"
- A progress bar to show how many question has been mastered
- A study statistics section

All cards
- Form to create a question card: question, answer, and category
- A grid of cards that shows the question and its answer and its progress state.
- card grid on desktop have rows 3 columns, on tablet 2 columns, and mobile 1 column.
- Initial grid have 12 cards. A load more button that adds 12 more.
- A dropdown to filter by the card by its categories
- A checkbox to toggle visibility of mastered question.
- Editing a card will open a modal for updating it.