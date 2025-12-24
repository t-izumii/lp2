window.addEventListener("load", function () {
  // inview
  const inviewElements = document.querySelectorAll(".js-inview");

  if (inviewElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-inview");
        // 一度検知したら監視を解除する場合は以下のコメントを外す
        // observer.unobserve(entry.target)
      } else {
        // 画面外に出たときにクラスを削除したい場合は以下のコメントを外す
        // entry.target.classList.remove("is-inview")
      }
    });
  }, observerOptions);

  inviewElements.forEach((element) => {
    observer.observe(element);
  });
});
