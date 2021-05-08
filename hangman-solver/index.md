---
title: Hangman Solver
featured_image: /assets/images/fullsize/hangman-solver/feat.jpg
noindex: true
---

<style>
    label {
        margin-right: 6px;
    }
</style>
<form id="main-form">
    <label for="pattern">Word pattern:</label>
    <input type="text" name="pattern" id="pattern" placeholder="h?ngm?n" />
    <br/>
    <br/>
    <label for="incorrect" >Incorrect letters:</label>
    <input type="text" name="incorrect" id="incorrect" placeholder="kyjri"/>
    <br/>
    <br/>
    <input type="submit" name="submit" id="submit" class="button button--light"/>
</form>
<p id="word-recommendations"></p>
<p id="letter-rankings"></p>
<script src="words.js"></script>
<script src="main.js"></script>
