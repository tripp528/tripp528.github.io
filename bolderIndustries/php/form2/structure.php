<!DOCTYPE html>
<div class="form-container z-depth-5">
  <h3>SEND EMAIL</h3>
  <form class="col s6" action="handler2.php" method="post">

    <div class="row">
      <div class="input-field col s12">
        <input name="name" id="name" type="text" class="validate">
        <label for="name">Name</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s12">
        <input name="email" id="email" type="email" class="validate">
        <label for="email">Email</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s12">
        <textarea name="message" id="message" class="materialize-textarea"></textarea>
        <label for="message">Message</label>
      </div>
    </div>

    <div class="row">
      <div>
          <button class="waves-effect waves-light btn submitbtn" type="submit">Submit</button>
      </div>
    </div>

  </form>
</div>
