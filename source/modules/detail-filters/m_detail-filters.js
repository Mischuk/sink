function detailsFilters() {
  $('.m_detail-filters .toggle a').on('click', function(){
    var text = $(this).find('span').text();
    $(this).find('span').text(text == "Развернуть форму" ? "Свернуть форму" : "Развернуть форму");

    $('.detail-filters-body').toggle();
  });
};
detailsFilters();


function detailsFiltersHidden() {
  var sliderFormatSecond = document.getElementById('width-slider-format');
  var inpws = document.getElementById('width-input-start');
  var inpwf = document.getElementById('width-input-finish');
  var inputs = [inpws, inpwf];
  var min = 0;
  var max = 2000;
  noUiSlider.create(sliderFormatSecond, {
    start: [ 0, 2000 ],
    step: 1,
    connect: true,
    range: {
      'min': [ min ],
      'max': [ max ]
    },
    pips: {
      mode: 'values',
      values: [min, max],
      density: 25,
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        postfix: ' мм',
      })
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
      postfix: ' мм',
    })
  });

  sliderFormatSecond.noUiSlider.on('update', function( values, handle ) {
    inputs[handle].value = values[handle];
  });



  function setSliderHandle(i, value) {
    var r = [null,null];
    r[i] = value;
    sliderFormatSecond.noUiSlider.set(r);
  }

  // Listen to keydown events on the input field.
  inputs.forEach(function(input, handle) {

    input.addEventListener('change', function(){
      setSliderHandle(handle, this.value);
    });

    input.addEventListener('keydown', function( e ) {

      var values = sliderFormatSecond.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = sliderFormatSecond.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;

      // 13 is enter,
      // 38 is key up,
      // 40 is key down.
      switch ( e.which ) {

        case 13:
          setSliderHandle(handle, this.value);
          break;

        case 38:

          // Get step to go increase slider value (up)
          position = step[1];

          // false = no step is set
          if ( position === false ) {
            position = 1;
          }

          // null = edge of slider
          if ( position !== null ) {
            setSliderHandle(handle, value + position);
          }

          break;

        case 40:

          position = step[0];

          if ( position === false ) {
            position = 1;
          }

          if ( position !== null ) {
            setSliderHandle(handle, value - position);
          }

          break;
      }
    });
  });

  $('.box input').keypress(function (e) {
    if (e.which == 13) {
      return false;
    }
  });

  $('.m_detail-filters button[type=reset]').on('click', function(){
    sliderFormatSecond.noUiSlider.set([min, max]);
  });
};
function detailsFiltersHiddenS() {
  var sliderFormatThird = document.getElementById('depth-slider-format');
  var inpds = document.getElementById('depth-input-start');
  var inpdf = document.getElementById('depth-input-finish');
  var inputs = [inpds, inpdf];
  var min = 0;
  var max = 2000;
  noUiSlider.create(sliderFormatThird, {
    start: [ 0, 2000 ],
    step: 1,
    connect: true,
    range: {
      'min': [ min ],
      'max': [ max ]
    },
    pips: {
      mode: 'values',
      values: [min, max],
      density: 25,
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        postfix: ' мм',
      })
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
      postfix: ' мм',
    })
  });

  sliderFormatThird.noUiSlider.on('update', function( values, handle ) {
    inputs[handle].value = values[handle];
  });



  function setSliderHandle(i, value) {
    var r = [null,null];
    r[i] = value;
    sliderFormatThird.noUiSlider.set(r);
  }

  // Listen to keydown events on the input field.
  inputs.forEach(function(input, handle) {

    input.addEventListener('change', function(){
      setSliderHandle(handle, this.value);
    });

    input.addEventListener('keydown', function( e ) {

      var values = sliderFormatThird.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = sliderFormatThird.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;

      // 13 is enter,
      // 38 is key up,
      // 40 is key down.
      switch ( e.which ) {

        case 13:
          setSliderHandle(handle, this.value);
          break;

        case 38:

          // Get step to go increase slider value (up)
          position = step[1];

          // false = no step is set
          if ( position === false ) {
            position = 1;
          }

          // null = edge of slider
          if ( position !== null ) {
            setSliderHandle(handle, value + position);
          }

          break;

        case 40:

          position = step[0];

          if ( position === false ) {
            position = 1;
          }

          if ( position !== null ) {
            setSliderHandle(handle, value - position);
          }

          break;
      }
    });
  });

  $('.box input').keypress(function (e) {
    if (e.which == 13) {
      return false;
    }
  });

  $('.m_detail-filters button[type=reset]').on('click', function(){
    sliderFormatThird.noUiSlider.set([min, max]);
  });
};

if ( $('#width-input-start').length ) {
  detailsFiltersHidden();
  detailsFiltersHiddenS();
}