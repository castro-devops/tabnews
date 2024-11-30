function status(request, responde) {
  responde.status(200).json({ title: "Continua tudo certo por aqui" });
}

export default status;
