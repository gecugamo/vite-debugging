import Rails from 'rails-ujs';

Rails.start();

// Runtime check needed to account for differences between dev and build output
// if (!window._rails_loaded) {
//   Rails.start();
// }

// declare global {
//   interface Window {
//     _rails_loaded?: boolean;
//   }
// }
