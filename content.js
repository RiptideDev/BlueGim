// Create a new div element
const newDiv = document.createElement('div');

// Set the innerHTML of the div with the provided HTML
newDiv.innerHTML = `
  <div class="ant-space-item">
    <div style="pointer-events: all;">
      <div>
        <div>
          <div class="sc-hCpPqN bBGutA flex" style="pointer-events: all; flex-shrink: 0; height: 49px;">
            <button class="btn-pushable" style="cursor: pointer; width: auto;">
              <span class="btn-shadow" style="border-radius: 8px;"></span>
              <span class="btn-edge" style="background: rgb(0, 107, 33); border-radius: 8px;"></span>
              <span class="btn-front" style="background: rgb(0, 125, 33); font-size: 14px; border-radius: 8px; padding: 12px 18px; font-weight: normal;">
                <i class="fas fa-layer-group"></i>
              </span>
            </button>
          </div>
        </div>
        <div style="position: absolute; top: 0px; left: 0px; width: 100%;">
          <div>
            <div class="ant-tooltip css-10xt8cz ant-tooltip-placement-bottom  ant-tooltip-hidden" style="left: -924px; top: -914px; transform-origin: 50% -16px; pointer-events: none;">
              <div class="ant-tooltip-content">
                <div class="ant-tooltip-arrow">
                  <span class="ant-tooltip-arrow-content"></span>
                </div>
                <div class="ant-tooltip-inner" role="tooltip">Layers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// Append the new div to the document body
document.body.appendChild(newDiv);
