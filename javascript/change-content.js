document.addEventListener('DOMContentLoaded', function () {
  // Initial display
  showTab('unpaid');

  // Event listeners for tab clicks
  document.querySelector('.unpaid-tab').addEventListener('click', function () {
    showTab('unpaid');
  });

  document.querySelector('.process-tab').addEventListener('click', function () {
    showTab('process');
  });

  document.querySelector('.completed-tab').addEventListener('click', function () {
    showTab('completed');
  });

  function showTab(tabName) {
    // Hide all containers
    document.querySelector('.container-unpaid').style.display = 'none';
    document.querySelector('.container-process').style.display = 'none';
    document.querySelector('.container-completed').style.display = 'none';

    // Show the selected container
    document.querySelector('.container-' + tabName).style.display = 'block';

    // Remove active class from all tabs
    document.querySelector('.unpaid-tab').classList.remove('active-tab-od');
    document.querySelector('.process-tab').classList.remove('active-tab-od');
    document.querySelector('.completed-tab').classList.remove('active-tab-od');

    // Add active class to the selected tab
    document.querySelector('.' + tabName + '-tab').classList.add('active-tab-od');
  }
});