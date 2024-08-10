// https://exercism.org/tracks/javascript/exercises/satellite/edit

//
// This is only a SKELETON file for the 'Satellite' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const solve = (preorder, psi, pei, inorder, isi, iei) => {
  if (psi > pei || isi > iei) {
    return {};
  }
  let rootData = preorder[psi];
  let rootIndex = inorder.indexOf(rootData);
  const root = {
    value: rootData,
    left: null,
    right: null,
  };

  let left_isi = isi;
  let left_iei = rootIndex - 1;
  let right_isi = rootIndex + 1;
  let right_iei = iei;

  let left_psi = psi + 1;
  let left_pei = left_psi + (left_iei - left_isi);
  let right_psi = left_pei + 1;
  let right_pei = pei;

  root.left = solve(preorder, left_psi, left_pei, inorder, left_isi, left_iei);
  root.right = solve(
    preorder,
    right_psi,
    right_pei,
    inorder,
    right_isi,
    right_iei
  );
  return root;
};

const checkConsistency = (preorder, inorder) => {
  // check if both are of same length
  if (preorder.length !== inorder.length) {
    throw new Error("traversals must have the same length");
  }

  // check if both contains same elements
  for (let ele of inorder) {
    if (!preorder.includes(ele)) {
      throw new Error("traversals must have the same elements");
    }
  }
  // check for duplicates items
  const count = new Map();
  for (let ele of preorder) {
    if (count.has(ele)) {
      throw new Error("traversals must contain unique items");
    } else count.set(ele, 1);
  }
  const count2 = new Map();
  for (let ele of inorder) {
    if (count2.has(ele)) {
      throw new Error("traversals must contain unique items");
    } else count2.set(ele, 1);
  }
  return;
};

export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length === 0 && inorder.length === 0) return {};
  checkConsistency(preorder, inorder);
  return solve(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
};
