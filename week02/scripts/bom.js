
// Get references to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to the button
button.addEventListener('click', () => {
  if (input.value.trim() === '') return; // Prevent empty entries

  // Create list item
  const li = document.createElement('li');
  li.textContent = input.value;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.setAttribute('aria-label', `Remove ${input.value}`);

  // Add delete functionality
  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
  });

  // Append delete button to list item
  li.appendChild(deleteBtn);

  // Append list item to the list
  list.appendChild(li);

  // Clear input field and focus
  input.value = '';
  input.focus();
});
