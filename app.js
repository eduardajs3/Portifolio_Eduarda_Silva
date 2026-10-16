// Home do portfólio — apenas lógica JavaScript.
// A marcação vive em index.html (incluindo os <template>) e o estilo em styles.css.

const tpl = (id) => document.getElementById(id).content.firstElementChild;
const clone = (id) => tpl(id).cloneNode(true);
const setText = (root, selector, value) => {
  root.querySelector(selector).textContent = value;
};

function renderPerfil() {
  const partes = profile.name.split(" ");

  document.querySelectorAll("[data-github]").forEach((a) => {
    a.href = profile.github;
  });
  document.querySelectorAll("[data-linkedin]").forEach((a) => {
    a.href = profile.linkedin;
  });

  setText(document, "[data-first-names]", partes.slice(0, 2).join(" "));
  setText(document, "[data-last-names]", partes.slice(2).join(" "));
  setText(document, "[data-role]", profile.role);
  setText(document, "[data-tagline]", profile.tagline);

  document.querySelector("[data-profile-photo]").src = profile.foto;

  setText(document, "[data-name]", profile.name);
  setText(document, "[data-semestre-dsm]", `${profile.course.semestre} · DSM`);

  setText(
    document,
    "[data-copyright]",
    `© ${new Date().getFullYear()} ${profile.name}`,
  );
}

function renderCurso() {
  const itens = [
    { label: "Faculdade", value: profile.course.faculdade },
    { label: "Curso", value: profile.course.curso },
    {
      label: "Início · Semestre atual",
      value: `${profile.course.inicio} · ${profile.course.semestre}`,
    },
    { label: "Previsão de conclusão", value: profile.course.conclusao },
  ];

  const alvo = document.getElementById("cursoCards");
  itens.forEach((item) => {
    const el = clone("tpl-info-card");
    setText(el, "[data-label]", item.label);
    setText(el, "[data-value]", item.value);
    alvo.appendChild(el);
  });
}

function renderExperiencias() {
  const alvo = document.getElementById("experiencias");
  experiences.forEach((exp) => {
    const el = clone("tpl-experiencia");
    setText(el, "[data-cargo]", exp.cargo);
    setText(el, "[data-empresa]", exp.empresa);
    setText(el, "[data-periodo]", exp.periodo);

    const lista = el.querySelector("[data-atividades]");
    exp.atividades.forEach((atividade) => {
      const li = clone("tpl-atividade");
      setText(li, "[data-texto]", atividade);
      lista.appendChild(li);
    });

    alvo.appendChild(el);
  });
}

function renderCursos() {
  const alvo = document.getElementById("cursosLista");
  courses.forEach((c) => {
    const el = clone("tpl-curso");
    setText(el, "[data-nome]", c.nome);
    setText(el, "[data-instituicao]", c.instituicao);
    setText(el, "[data-horas]", `Carga horária: ${c.horas}`);
    setText(el, "[data-periodo]", c.periodo);
    setText(el, "[data-local]", c.local);
    alvo.appendChild(el);
  });
}

function renderIdiomas() {
  const alvo = document.getElementById("idiomasLista");
  languages.forEach((l) => {
    const el = clone("tpl-idioma");
    setText(el, "[data-lingua]", l.lingua);
    setText(el, "[data-nivel]", l.nivel);
    el.querySelector("[data-barra]").style.setProperty("--pct", `${l.pct}%`);
    alvo.appendChild(el);
  });
}

function renderProjetos() {
  const alvo = document.getElementById("projetosLista");
  projects.forEach((p) => {
    const el = clone("tpl-projeto");
    el.href = `projetos/${encodeURIComponent(p.slug)}.html`;

    const img = el.querySelector("[data-img]");
    img.src = p.imagem;
    img.alt = `Tela do projeto ${p.nome}`;

    setText(el, "[data-semestre]", p.semestre);
    setText(el, "[data-nome]", p.nome);
    setText(el, "[data-resumo]", p.resumo);
    alvo.appendChild(el);
  });
}

renderPerfil();
renderCurso();
renderExperiencias();
renderCursos();
renderIdiomas();
renderProjetos();