
const tpl = (id) => document.getElementById(id).content.firstElementChild;
const clone = (id) => tpl(id).cloneNode(true);
const setText = (root, selector, value) => {
  root.querySelector(selector).textContent = value;
};


const isProjectPage = location.pathname.includes("/projetos/");
const slug = isProjectPage
  ? location.pathname.split("/").pop().replace(/\.html$/, "")
  : new URLSearchParams(location.search).get("slug");
const projeto = projects.find((x) => x.slug === slug);

if (!projeto) {
  document.title = "Projeto não encontrado — Portfólio Eduarda Josileide";
  document.getElementById("notFound").hidden = false;
} else {
  renderMeta(projeto);
  renderConteudo(projeto);
  renderGaleria(projeto);
  renderOutros(projeto);
  document.getElementById("projeto").hidden = false;
}

function renderMeta(p) {
  document.title = `${p.nome} — Portfólio Eduarda Josileide`;
  document.querySelector('meta[name="description"]').content = p.resumo;
  document.querySelector('meta[property="og:title"]').content =
    `${p.nome} — Portfólio Eduarda Josileide`;
  document.querySelector('meta[property="og:description"]').content = p.resumo;
}

function preencherChips(container, itens) {
  itens.forEach((texto) => {
    const chip = clone("tpl-chip");
    chip.textContent = texto;
    container.appendChild(chip);
  });
}

function renderConteudo(p) {
  const repoFront = document.querySelector("[data-repo-front]");
  const repoBack = document.querySelector("[data-repo-back]");

  if (p.repos) {
    repoFront.href = p.repos.frontend;
    repoBack.href = p.repos.backend;

    repoFront.hidden = false;
    repoBack.hidden = false;
  } else if (p.repo) {
    repoFront.href = p.repo;
    repoFront.hidden = false;
    repoBack.hidden = true;

    repoFront.textContent = "Acessar código ";

    const icon = document.createElement("svg");
    icon.classList.add("icon");

    const use = document.createElement("use");
    use.setAttribute("href", "#i-arrow-up-right");

    icon.appendChild(use);
    repoFront.appendChild(icon);
  }

  setText(document, "[data-semestre]", p.semestre);
  setText(document, "[data-nome]", p.nome);
  setText(document, "[data-resumo]", p.resumo);
  setText(document, "[data-descricao]", p.descricao);
  setText(document, "[data-participacao]", p.participacao);

  preencherChips(
    document.querySelector("[data-tecnologias]"),
    p.tecnologias,
  );

  preencherChips(
    document.querySelector("[data-minhas-tecnologias]"),
    p.minhasTecnologias,
  );
}
function renderOutros(p) {
  const alvo = document.getElementById("outrosProjetos");
  projects
    .filter((o) => o.slug !== p.slug)
    .forEach((o) => {
      const link = clone("tpl-outro");
      link.href = `projetos/${encodeURIComponent(o.slug)}.html`;
      link.textContent = o.nome;
      alvo.appendChild(link);
    });
}

function renderGaleria(p) {
  const total = p.galeria.length;
  if (total === 0) return;

  const gallery = document.getElementById("gallery");
  const track = document.getElementById("track");
  gallery.hidden = false;

  p.galeria.forEach((src, i) => {
    const slide = clone("tpl-slide");
    const img = slide.querySelector("img");
    img.src = src;
    img.alt = `Tela ${i + 1} do projeto ${p.nome}`;
    img.loading = i === 0 ? "eager" : "lazy";
    track.appendChild(slide);
  });

  if (total < 2) return;

  const controls = document.getElementById("galleryControls");
  const dotsWrap = document.getElementById("dots");
  const counter = document.getElementById("counter");
  controls.hidden = false;

  p.galeria.forEach((_, i) => {
    const dot = clone("tpl-dot");
    dot.setAttribute("aria-label", `Ir para foto ${i + 1}`);
    dot.addEventListener("click", () => go(i));
    dotsWrap.appendChild(dot);
  });

  const dots = [...dotsWrap.children];
  let index = 0;
  let timer;

  function render() {
    track.style.setProperty("--slide", index);
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    counter.textContent = `${index + 1}/${total}`;
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => {
      index = (index + 1) % total;
      render();
    }, 4000);
  }

  function go(i) {
    index = (i + total) % total;
    render();
    restart();
  }

  document.getElementById("prev").addEventListener("click", () => go(index - 1));
  document.getElementById("next").addEventListener("click", () => go(index + 1));
  render();
  restart();
}