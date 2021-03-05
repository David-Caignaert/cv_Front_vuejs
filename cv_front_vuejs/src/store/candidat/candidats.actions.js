import axiox from "axios";

const getCandidats = (context) => {
  axiox.get("get/getCandidat.php?id=1").then((response) => {
    const data = response.data;
    context.commit(
      "GET_CANDIDATS",
      Object.keys(data).map((key) => data[key])
    ),
      (error) => {
        console.log(error);
      };
  });
};

export default {
  getCandidats,
};
