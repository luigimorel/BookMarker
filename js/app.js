//Listener for the form submit action
document.getElementById("myForm").addEventListener("submit", saveBookmark);

//Save the bookmark
function saveBookmark(e) {
  //Get the form values
  var siteName = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteUrl").value;

  if (!validateForm(siteName, siteUrl)) {
    return false;
  }
  var bookMark = {
    name: siteName,
    url: siteUrl
  };

  //   localStorage.setItem("test", "Hello there");
  //   localStorage.removeItem("test");

  //Test if the bookmarks field is empty

  if (localStorage.getItem("bookmarks") === null) {
    var bookmarks = [];
    bookmarks.push(bookMark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookMark);
    localStorage.setItem("bookmarks", JSON.stringify("bookmarks"));
  }
  //Clear the form
  document.getElementById("myForm").reset();

  //Re-feth the bookmarks
  fetchBookMarks();

  //Prevents the form from submitting
  e.preventDefault();
}
function deleteBookMark(url) {
  //Get the bookmarks from local storage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  //Loop through the bookmarks
  for (var i = 0; i < bookmarks.length; i++) {
    if (bbookmarks[i].url == url) {
      //Remove the array
      bookmarks.splice(i, 1);
    }
  }
  localStorage.setItem("bookmarks", JSON.stringify("bookmarks"));
  //Fetch the bookmarks again
  fetchBookMarks();
}

function fetchBookMarks() {
  //Get the bookmarks from the localStorage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  //Get the output ID
  var bookMarkResults = document.getElementById("bookMarkResults");

  //Build the output
  bookMarkResults.innerHTML = "";
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookMarkResults.innerHTML +=
      '<div class="well">' +
      name +
      '<a class="btn btn-default" target="_blank" href="' +
      url +
      '">Visit</a> ' +
      "<a onclick=\"deleteBookmark('" +
      url +
      '\')" class="btn btn-danger" href="#">Delete</a>' +
      "</h3>" +
      "</div>";
    }
}

//Validate the form
function validateForm(siteName, siteUrl) {
    "<h3>" +
  if (!siteName || !siteUrl) {
    alert("Please fill in the form ");
    return false;
  }
  var expression = RegExp(
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2, 256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
  );

  if (!siteUrl.match(expression)) {
    alert("Please enter a valid URL");
    return false;
  }

  return true;
}
