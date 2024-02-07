import "./LeftMenu.css";

const LeftMenu = () => {
  return (
    <div class="list-group" id="menu-style">
      <button
        type="button"
        class="list-group-item list-group-item-action"
        aria-current="true"
      >
        The current button
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        <i class="bi bi-0-circle"></i>A second button item
        <i class="bi-alarm"></i>
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        A third button item
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        A fourth button item
      </button>
    </div>
  );
};

export default LeftMenu;
