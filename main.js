$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("#email").mask("A", {
    translation: {
      A: { pattern: /[\w@\-.+]/, recursive: true },
    },
  });

  $("form").validate({
    rules: {
      inputName: {
        required: true,
      },
      inputEmail: {
        required: true,
      },
      inputMessage: {
        required: true,
      },
    },

    submitHandler: function (form) {
      alert("Formulário enviado. Logo entraremos em contato!");
      $("input").val("");
    },
  });
});
