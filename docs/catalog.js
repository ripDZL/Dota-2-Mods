"use strict";

const filters = document.querySelector("#filters");
const search = document.querySelector("#search");
const cards = document.querySelector("#cards");
const results = document.querySelector("#results");
const categoryTitle = document.querySelector("#category-title");
const dialog = document.querySelector("#mod-detail");
const detailContent = document.querySelector("#detail-content");
let category = "All";

function element(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content) node.textContent = content;
  return node;
}

function makeMedia(mod) {
  const media = element("div", "card-media");
  media.dataset.mod = mod.id;
  media.setAttribute("aria-hidden", "true");
  if (mod.image) {
    const image = element("img");
    image.src = "assets/" + mod.image;
    image.alt = "";
    image.loading = "lazy";
    media.append(image);
  } else {
    media.classList.add("text-cover");
    media.append(element("span", "cover-type", mod.type), element("strong", "", mod.cover));
  }
  return media;
}

function makeStatus(mod) {
  const badge = element("span", "card-status", mod.status);
  badge.dataset.status = mod.status;
  return badge;
}

function modCredit(mod) {
  return mod.type + " · " + (mod.credit ?? "ripDZL");
}

function showDetails(mod) {
  const title = element("h2", "", mod.title);
  title.id = "detail-title";

  const metadata = element("div", "detail-meta");
  metadata.append(element("span", "card-credit", modCredit(mod)), element("span", "version", mod.version), makeStatus(mod));

  const content = element("div", "detail-copy");
  content.append(title, metadata, element("p", "", mod.summary), element("h3", "", "Release notes"), element("p", "", mod.notes));
  if (mod.editions) {
    const editions = element("ul", "detail-editions");
    for (const edition of mod.editions) {
      const item = element("li");
      const link = element("a", "edition-link");
      link.href = edition.file ? mod.downloadBase + edition.file : edition.release;

      if (edition.image) {
        const image = element("img", "edition-preview");
        image.src = "assets/" + edition.image;
        image.alt = "";
        image.loading = "lazy";
        link.classList.add("has-preview");
        link.append(image);
      }

      const copy = element("span", "edition-copy");
      copy.append(element("strong", "", edition.name + " · " + edition.version));
      if (edition.summary) copy.append(element("span", "", edition.summary));
      if (edition.file) copy.append(element("span", "edition-action", "Download ZIP"));
      link.append(copy);
      item.append(link);
      editions.append(item);
    }
    content.append(element("h3", "", mod.editionsHeading ?? "Editions on GitHub"), editions);
    if (mod.downloadBase) {
      const release = element("a", "button detail-download", "View collection on GitHub");
      release.href = mod.release;
      content.append(release);
    }
  } else {
    const release = element("a", "button detail-download", "Downloads on GitHub");
    release.href = mod.release;
    content.append(release);
  }

  detailContent.replaceChildren(makeMedia(mod), content);
  dialog.showModal();
  dialog.scrollTop = 0;
}

function makeCard(mod) {
  const card = element("article", "card");
  card.id = "mod-" + mod.id;

  const button = element("button", "card-open", mod.title);
  button.type = "button";
  button.setAttribute("aria-haspopup", "dialog");
  button.addEventListener("click", () => showDetails(mod));
  const title = element("h3", "card-title");
  title.append(button);

  const footer = element("div", "card-footer");
  footer.append(element("span", "version", mod.version), makeStatus(mod));

  const content = element("div", "card-content");
  content.append(title, element("p", "card-credit", modCredit(mod)), element("p", "card-description", mod.summary), footer);
  card.append(makeMedia(mod), content);
  return card;
}

function render() {
  const query = search.value.trim().toLocaleLowerCase();
  const shown = mods.filter(mod => {
    const editionTerms = mod.editions?.map(edition => edition.name + " " + edition.version) ?? [];
    const searchable = [mod.title, mod.type, mod.category, mod.credit ?? "ripDZL", mod.version, mod.summary, mod.notes, ...editionTerms].join(" ").toLocaleLowerCase();
    return (category === "All" || mod.category === category) && searchable.includes(query);
  });
  cards.replaceChildren(...shown.map(makeCard));
  if (!shown.length) cards.append(element("p", "empty", "No mods match your filters."));
  categoryTitle.textContent = category === "All" ? "All mods" : category;
  results.textContent = shown.length + (shown.length === 1 ? " mod" : " mods");
  for (const button of filters.children) {
    button.setAttribute("aria-pressed", String(button.dataset.category === category));
  }
}

for (const name of ["All", "Models", "Terrain", "Interface", "Effects", "Audio"]) {
  const button = element("button", "", name === "All" ? "All mods" : name);
  button.type = "button";
  button.dataset.category = name;
  button.setAttribute("aria-controls", "cards");
  button.addEventListener("click", () => {
    category = name;
    render();
  });
  filters.append(button);
}

search.addEventListener("input", render);

render();
