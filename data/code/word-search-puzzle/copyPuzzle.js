javascript: var copyPuzzle = async () => {
  /* trigger the necessary UI bits to copy the letters to clipboard */
  $("#share-button").click();
  $("#image-type option[value='text']").prop("selected", true);
  $("#image-type").trigger("change");
  $("#image-generate").click();
  $(".modal-close").click();
  /* catch the letters from the clipboard for our payload */
  const payload = {
    title: $("#wordsearch-title").text(),
    letters: $("#copy-textarea").html().replace(/<br>/g, "\n"),
    words: $(".wordsearch-clue")
      .toArray()
      .map((el) => el.innerText),
    url: document.URL,
  };
  const clipboardItemData = { ["text/plain"]: JSON.stringify(payload) };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
};
copyPuzzle();