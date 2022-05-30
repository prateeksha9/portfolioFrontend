const API_ROOT = 'http://admin.graphitophillic.com/getapi';
export const APIurls = {
  fetchPoem: () => `${API_ROOT}/poem`,
  fetchProject: () => `${API_ROOT}/project`,
  fetchSketch: () => `${API_ROOT}/sketch`,
  fetchBook: () => `${API_ROOT}/book`,
  fetchNonTechnical: () => `${API_ROOT}/nontechnical`,
};
