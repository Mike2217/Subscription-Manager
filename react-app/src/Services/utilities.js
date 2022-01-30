import axios from 'axios'

export const getSubscriptions = async (id) => {
  try {
    const res = await axios.get(
      `https://subscription-manager-p4.herokuapp.com/Subscriptions/${id}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const res = await axios.get(
      `https://subscription-manager-p4.herokuapp.com/User/${id}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const res = await axios.get(
      `https://subscription-manager-p4.herokuapp.com/User/`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const newSubscription = async (body) => {
  try {
    const res = await axios.post(
      `https://subscription-manager-p4.herokuapp.com/Subscriptions/`,
      body
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const newUser = async (body) => {
  try {
    const res = await axios.post(
      `https://subscription-manager-p4.herokuapp.com/User/`,
      body
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const editSubscription = async (id, user) => {
  try {
    const res = await axios.put(
      `https://subscription-manager-p4.herokuapp.com/Subscriptions/${id}`,
      user
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const editUser = async (id, user) => {
  try {
    const res = await axios.put(
      `https://subscription-manager-p4.herokuapp.com/User/${id}`,
      user
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSubscriptions = async (id) => {
  try {
    const res = await axios.delete(
      `https://subscription-manager-p4.herokuapp.com/Subscriptions/${id}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await axios.delete(
      `https://subscription-manager-p4.herokuapp.com/User/${id}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
